import { FC, useState, ChangeEvent, useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { IItem } from "../../models/IItem";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/products/actions";
import { getShopList } from "../../services/shopService";

const AddItemView: FC = () => {
    const [itemList, setProductsData] = useState<Array<IItem>>([]);
    const [name, setName] = useState<string>("");
    const [shopName, setShop] = useState<string>("");
    const [nameError, setNameError] = useState<boolean>(false);
    const [shopError, setShopError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            const data = await getShopList();
            setProductsData(data);
        };
        getData();
    }, []);

    const setProductName = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        e.target.value.trim() ? setNameError(false) : setNameError(true);
        setName(e.target.value.trim());
    };

    const dispatch = useDispatch();
    const submit = () => {
        if (!name.trim()) setNameError(true);
        if (!shopName.trim()) setShopError(true);
        if (name.trim() && shopName.trim()) {
            dispatch(addProduct(name, shopName));
            setName("");
            setShop("");
        }
    };

    return (
        <div className="add-item-wrapper">
            <Input
                type="text"
                value={name}
                name="name"
                placeholder="Name"
                onChange={setProductName}
                error={nameError}
            />

            <Select
                onShopSelect={(value: string) => setShop(value)}
                itemList={itemList}
                shopName={shopName}
                error={shopError}
            />

            <Button className="form-button" onClick={submit}>
                Add
            </Button>
        </div>
    );
};

export default AddItemView;
