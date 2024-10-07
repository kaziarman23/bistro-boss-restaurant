import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseAxiosPublic from "../../Shared/AxiosSecurePublic/UseAxiosPublic";
import useAxiosSecure from "../../Shared/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = UseAxiosPublic();

  // Form  Dtails
  const { register, handleSubmit, reset } = useForm();

  // handle form submit
  const onSubmit = async (data) => {

    // uploading the img in a img url converter to get the url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });


    // sending added items in the server, with image url
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseInt(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        
        // showing success alert and reseting the form
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };

  // image hosting
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  return (
    <div>
      {/* section title */}
      <SectionTitle heading="add a new item" subHeading="---What's new?---" />

      <div className="w-4/5 mx-auto bg-gray-200 rounded-xl">
        {/* Add item form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-2 space-y-5 my-5">
          <label className="form-control w-full">
            {/* Recipe name */}
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-4 items-center">
            {/* category lable */}
            <div className="w-1/2">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Chose you&#39;r category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
                <option value="drink">Drinks</option>
              </select>
            </div>

            {/* price lable */}
            <div className="w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Enter Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* text aria */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <input
            type="submit"
            value="Add Items"
            className="bg-orgGold text-black btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
