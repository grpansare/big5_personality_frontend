import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    age: 30,
    gender: "Male",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    setProfile({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-pic"
        />
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button onClick={handleUpdate}>Save</button>
          </>
        ) : (
          <>
            <h2>{profile.name}</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>Age: {profile.age}</p>
            <p>Gender: {profile.gender}</p>
            <button onClick={() => setIsEditing(true)}>Update Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
