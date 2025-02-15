import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    course: 'Computer Science',
    profilePicture: '',
    contact: '',
    countryCode: '+1',
    email: 'johndoe@example.com',
    address: '123 Main St, City, Country'
  });

  const countries = [
    { name: 'India', code: '+91' },
    { name: 'USA', code: '+1' },
    { name: 'UK', code: '+44' },
    { name: 'Canada', code: '+1' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'Australia', code: '+61' },
    { name: 'Japan', code: '+81' },
    { name: 'China', code: '+86' },
    { name: 'Brazil', code: '+55' },
    { name: 'South Africa', code: '+27' },
    { name: 'Russia', code: '+7' },
    { name: 'Italy', code: '+39' },
    { name: 'Netherlands', code: '+31' },
    { name: 'Spain', code: '+34' },
    { name: 'Sweden', code: '+46' },
    { name: 'Norway', code: '+47' },
    { name: 'Mexico', code: '+52' },
    { name: 'Singapore', code: '+65' },
    { name: 'South Korea', code: '+82' }
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setProfile({ ...profile, [name]: URL.createObjectURL(files[0]) });
    } else if (name === 'contact') {
      if (value.length <= 10) {
        setProfile({ ...profile, [name]: value });
      }
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactPattern = /^\d{10}$/;
    if (contactPattern.test(profile.contact)) {
      alert('Profile Updated Successfully!');
      console.log('Updated Profile:', profile);
      // No reset here to retain the user's updated data
    } else {
      alert('Invalid contact number. Please enter exactly 10 digits.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="md:w-3/4 md:pr-4">
        <h1 className="
        text-3xl font-bold text-gray-800
         dark:text-white mb-4 glow
         p-3.5 rounded-2xl text-center" >Profile Page</h1>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow glow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Personal Information</h2>
          <div className="space-y-2">
            {profile.profilePicture && (
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mb-4 glow"
              />
            )}
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Course:</strong> {profile.course}</p>
            <p><strong>Contact:</strong> {profile.countryCode}-{profile.contact}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Address:</strong> {profile.address}</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-100 text-black dark:bg-black dark:text-gray-200 rounded-lg shadow glow">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-800 dark:text-gray-200">Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow"
              />
            </div>
            <div>
              <label className="block text-gray-800 dark:text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow"
              />
            </div>
            <div>
              <label className="block text-gray-800 dark:text-gray-200">Course Studying</label>
              <input
                type="text"
                name="course"
                value={profile.course}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow"
              />
            </div>
            <div className="flex space-x-2">
              <div>
                <label className="block text-gray-800 dark:text-gray-200">Country</label>
                <select
                  name="countryCode"
                  value={profile.countryCode}
                  onChange={handleChange}
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow text-white bg-gray-800"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code} className="text-white bg-gray-800">
                      {country.name} {country.code}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-800 dark:text-gray-200">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={profile.contact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow"
                  placeholder="1234567890"
                  maxLength="10"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-800 dark:text-gray-200">Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow"
              />
            </div>
            <div>
              <label className="block text-gray-800 dark:text-gray-200">Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 glow"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>

      <div className="md:w-1/4 mt-8 md:mt-0 flex flex-col items-center space-y-2 glow">
        <h2 className="text-lg font-semibold bg-gradient-to-b from-amber-700 via-amber-500 to-amber-300
         mb-7 text-gray-800 dark:text-white p-2 mt-3 
         rounded-2xl transition duration-200 glow">Connect</h2>
        <a href="#" className="text-blue-600 hover:text-green-400 transition duration-200 glow">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-blue-400 hover:text-green-300 transition duration-200 glow">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-blue-700 hover:text-green-400 transition duration-200 glow">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="text-gray-300 hover:text-green-400 transition duration-200 glow">
          <FaGithub size={24} />
        </a>
        <a href="#" className="text-red-500
         hover:text-green-400 transition duration-200 glow">
          <FaYoutube size={30} />
        </a>
        <a href="#" className="text-green-500
         hover:text-amber-600 transition duration-200 glow">
          <FaWhatsapp size={30} />
        </a>
      </div>

      <style>{`
        .glow {
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.6);
          transition: box-shadow 0.3s ease-in-out;
        }

        .glow:hover {
          box-shadow: 0 0 25px rgba(0, 255, 0, 1);
        }
      `}</style>
    </div>
  );
};

export default Profile;
