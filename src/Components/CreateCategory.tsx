import { useForm } from "react-hook-form";
import { useRecoilState} from "recoil";
import { categoryState } from "./atoms";

interface ICategory{
    newCate:string;
}

function CreateCategory(){
    const [category, setCategory] = useRecoilState(categoryState)
    const {register,handleSubmit,setValue} = useForm<ICategory>();
    const handleValid = ({newCate}:ICategory) => {
        console.log("newcate",newCate);
        setCategory(newCate as any);
        console.log("nowCate",category);
        setValue("newCate","");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("newCate")}
            placeholder="Write a new cate" />
            <button>ADD Category</button>
        </form>
    )
}

export default CreateCategory;