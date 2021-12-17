import {useAuth} from "libs/hooks/useAuth"
import { AppBar } from "components/appbar";
import {Title} from "ui/title"


function ToDoPage(props) {
  const user = useAuth
  return (
    <>
      <AppBar />
      <Title>To Do List</Title>
    </>
  )
}

export default ToDoPage;
