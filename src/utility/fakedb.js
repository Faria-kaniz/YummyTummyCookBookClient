import { toast } from "react-toastify";
const getFavouriteList = () => {
    let favouriteList = [];
    const storageFavouriteList = localStorage.getItem("favourite-list");
    if (storageFavouriteList) {
        favouriteList = storageFavouriteList;
    } else {
        localStorage.setItem("favourite-list", JSON.stringify(favouriteList));
    }
    return favouriteList;
};

const addToFavourite = (id) => {
    let storedFavouriteList = getFavouriteList();
    let item;
    if (typeof storedFavouriteList == "string") {
        storedFavouriteList = JSON.parse(storedFavouriteList);
        item = storedFavouriteList.find((ele) => ele == id);
    }

    if (item) {
        toast.error("This item already favourite!!!", { autoClose: 1000 });
    } else {
        let storedFavouriteListArr = [...storedFavouriteList, id];
        localStorage.setItem(
            "favourite-list",
            JSON.stringify(storedFavouriteListArr)
        );
        toast.success("Favourite!!!", { autoClose: 1000 });
    }
};

export { getFavouriteList, addToFavourite };
