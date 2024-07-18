import Search from '../search/Search.jsx';
import Pagitation from '../pagination/Pagination.jsx';
import UserList from './user-list/UserList.jsx';
import { useEffect, useState } from 'react';
import UserAdd from './user-add/UserAdd.jsx';
import UserDetails from './user-details/UserDetails.jsx';
import UserDelete from './user-delete/UserDelete.jsx';
import UserEdit from './user-edit/UserEdit.jsx';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [showUserEditById, setShowUserEditById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('useEffect called');
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const userResult = Object.values(result);

                setUsers(userResult);
                console.log(userResult);
            } catch (error) {
                console.error('Fetch error:', error); // More detailed error logging
                alert(error.message);
            } finally {
                setIsLoading(false);
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

        setUsers(oldUsers => [...oldUsers, createdUser]);

        setShowAddUser(false);
    }

    const userDetailsClickHandler = (userId) => {
        setShowUserDetailsById(userId);
    }

    const userDeleteClickHandler = (userId) => {
        setShowUserDeleteById(userId);
    }

    const userDeleteHandler = async (userId) => {
        await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE'
        });

        setUsers(oldUsers => oldUsers.filter(user => user._id != userId));

        setShowUserDeleteById(null);
    }

    const userEditClickHandler = (userId) => {
        setShowUserEditById(userId);
    }

    const editUserHandler = async (e) => {
        e.preventDefault();
        const user = users.find(user => user._id == showUserEditById);

        const formData = new FormData(e.currentTarget);
        const userData = {
            _id: user._id,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            createdAt: user.createdAt,
            updatedAt: new Date().toISOString(),
            imageUrl: formData.get('imageUrl'),
            address: {
                country: formData.get('country'),
                city: formData.get('city'),
                street: formData.get('street'),
                streetNumber: formData.get('streetNumber')
            }
        }

        const response = await fetch(`${baseUrl}/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const updatedUser = await response.json();

        setUsers(oldUsers => {
            const idx = oldUsers.findIndex(u => u._id == user._id);
            const newUsers = [...oldUsers];
            newUsers[idx] = updatedUser;
            return newUsers
            // oldUsers.splice(idx, 1, updatedUser);
        });

        setShowUserEditById(null);
    }

    return (
        <section className="card users-container">
            <Search />

            <UserList
                users={users}
                isLoading={isLoading}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
                onUserEditClick={userEditClickHandler}
            />

            {showUserEditById && (
                <UserEdit
                    user={users.find(user => user._id == showUserEditById)}
                    onClose={() => setShowUserEditById(null)}
                    onEdit={editUserHandler}
                />
            )}

            {showUserDeleteById && (
                <UserDelete
                    onClose={() => setShowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            )}

            {showUserDetailsById && (
                <UserDetails
                    user={users.find(user => user._id == showUserDetailsById)}
                    onClose={() => setShowUserDetailsById(null)}
                />
            )}

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