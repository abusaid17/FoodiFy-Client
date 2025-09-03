import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import usePublicAxios from "../../../../Hooks/usePublicAxios";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData()
    const AxiosSecure = useAxiosSecure();
    const publicAxios = usePublicAxios();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        const imageFile = { image: data.image[0] }
        const res = await publicAxios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url,
            }
            const menuRes = await AxiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log('', menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
        // reset();
    }
    return (
        <div>
            {/* Main Content */}
            <main className="flex-1 p-6 flex flex-col items-center">
                <h1 className="text-4xl font-semibold text-center mb-6 uppercase">Update Item</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md">
                    {/* Recipe Name */}
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Recipe name*</label>
                        <input
                            type="text"
                            defaultValue={name}
                            {...register("name", { required: true })}
                            placeholder="Recipe name"
                            className="w-full p-2 border rounded"
                            required />
                    </div>

                    {/* Category + Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-semibold mb-2">Category*</label>
                            <select defaultValue={category}
                                {...register("category", { required: true })}
                                className="w-full p-2 border rounded"
                                required >
                                <option value="default">Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Price*</label>
                            <input
                                type="number"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                defaultValue={price}
                                className="w-full p-2 border rounded"
                                required />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">Recipe Details*</label>
                        <textarea defaultValue={recipe}
                            {...register("recipe", { required: true })}
                            placeholder="Recipe Details"
                            rows="5"
                            className="w-full p-2 border rounded"
                            required />
                    </div>
                    <fieldset className="fieldset sm:w-full">
                        <legend className="fieldset-legend">Pick a file</legend>
                        <input {...register("image", { required: true })} type="file" className="file-input" />
                        <label className="label">Max size 2MB</label>
                    </fieldset>
                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="btn md:w-auto px-6 py-2 bg-yellow-700 text-white font-semibold rounded hover:bg-orange-500 transition" >
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </main>

        </div>
    );
};

export default UpdateItem;