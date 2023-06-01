import { useEffect, useState } from "react"
import styles from "./Admin.module.scss"
import { getToken, getUserRemote, urlAxios } from "../../../utils"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function () {
  const [users, setUsers] = useState<any[]>([]);
  const [userEnabled, setUserEnabled] = useState<"enable" | "disable" | "all">("all");
  const navigate = useNavigate();

  const getUsers = async () => {
    const { admin, name } = await getUserRemote();
    const user = await getToken();
    const token = user.token;

    if (!!token && admin) {
      try {
        const { data } = await urlAxios.get(`${import.meta.env.VITE_BACK_URL}/users`);
        const datos = data.filter((elem: any) => elem.name !== name)

        if (userEnabled === "enable") {
          setUsers(datos.filter((elem: any) => elem.enable === true))
        }
        if (userEnabled === "disable") {
          return setUsers(datos.filter((elem: any) => elem.enable === false))
        }
        if (userEnabled === "all") return setUsers([...datos]);
      } catch (error: any) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Vuelve a intentarlo",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No tiene permisos",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/user")
    }
  }

  const enableUser = async (email: any) => {
    try {
      await urlAxios.patch(`${import.meta.env.VITE_BACK_URL}/user/?email=${email}`);
      getUsers();
    } catch (error: any) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Vuelve a intentarlo",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  const handleUserEnabled = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value as "enable" | "disable" | "all";
    setUserEnabled(selectedFilter);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, [userEnabled])

  return (
    <>
      <div className={styles.card1}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>
                <form >
                  <select value={userEnabled} onChange={handleUserEnabled}>
                    <option value="all">Todos</option>
                    <option value="enable">Habilitados</option>
                    <option value="disable">Deshabilitados</option>
                  </select>
                </form>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              let email = user.email
              let name = user.name
              let encriptadoEmail = window.btoa(email)

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name} <b>({user.admin ? "admin" : "usuario"})</b></td>
                  <td>{user.email}</td>
                  <td> <button onClick={() => enableUser(user.email)} className={user.enable ? styles.enabled : styles.disabled}>{user.enable ? "Habilitado" : "Deshabilitado"}</button></td>
                  <td><Link to={`/detail/${name}/${encriptadoEmail}`}>Ver perfil</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}