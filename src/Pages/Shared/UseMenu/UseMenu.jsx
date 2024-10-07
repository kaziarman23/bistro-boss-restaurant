import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosSecurePublic/UseAxiosPublic";

const UseMenu = () => {
  const axiosPublic = UseAxiosPublic();

  // tanStack query
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  // normal fetch
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  return [menu, loading, refetch];
};

export default UseMenu;
