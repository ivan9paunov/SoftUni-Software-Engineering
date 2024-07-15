import Search from '../search/Search.jsx';
import Pagitation from '../pagination/Pagination.jsx';
import UserList from './user-list/UserList.jsx';
import { useEffect, useState } from 'react';
import UserAdd from './user-add/UserAdd.jsx';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const userResult = Object.values(result);

                setUsers(userResult);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const addUserHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const createdUser = await response.json();

        setUsers(oldUsers => [createdUser, ...oldUsers]);

        setShowAddUser(false);
    }

    return (
        <section className="card users-container">
            <Search />

            <UserList users={users} />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserHandler}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}> Add new user</button>

            <Pagitation />
        </section >
    );
}