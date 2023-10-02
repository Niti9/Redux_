//This file made for the Adming uses where we can create new data
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  //prebuilt objects inside hooks which automatically take data or loading etc.
  const { data, error, isLoading ,isSuccess } = useGetAccountsQuery();
  //useGetAccount automatically run or work
  //but we have to manually run useAddAccountMutation
  // first parameter inside array will run this hook
  //and second parameter can be used to show data or response
  const [addAccount, response] = useAddAccountMutation();

  //to delete the account we use useDeleteAccountMutation hook
  const [deleteAccount] = useDeleteAccountMutation();

  //to update the account
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>

        {/*check if data is loading    */}
        {isLoading ? <p> Loading....</p> : null}

        {/* data from db.json */}
        {isSuccess &&
          data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount} {/* delete account button */}
              <button onClick={() => deleteAccount(account.id)}>
                Delete Account{" "}
              </button>
              {/* also here we have to destructured the id and amount */}
              <button
                onClick={() => updateAccount({ id: account.id, amount: 777 })}
              >
                Update Account{" "}
              </button>
            </p>
          ))}

        <button onClick={() => addAccount(101, data.length + 1)}>
          Add Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Admin;
