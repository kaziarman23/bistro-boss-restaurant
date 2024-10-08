import { useContext } from "react";
import useAxiosSecure from "../../Shared/AxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  //hooks
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // tenstack query
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="">
      {/* section content */}
      <SectionTitle heading="all payments" subHeading="---Long Time!---" />
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold p-3">
          Complite Payments : {payments.length}
        </h1>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>SL:</th>
              <th>Email</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.price}</td>
                <td>{payment.transcationId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
