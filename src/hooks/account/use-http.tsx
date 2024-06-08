import { gql, useMutation } from "@apollo/client";

// Define the fragment for reusability
const editAccountMutation = gql`
  mutation EditAccount($username: String, $password: String) {
    editAccount(username: $username, password: $password) {
      username
      password
    }
  }
`;

const useEditAccount = () => {
  const [mutate] = useMutation(editAccountMutation);

  const handleEdit = async (username: string, password: string) => {
    await mutate({
      variables: { username, password },
      update: (cache, { data }) => {
        console.log(`Cache Data`, cache);
        console.log(`Data`, data);
      },
    });
  };

  return { handleEdit };
};

export { useEditAccount };
