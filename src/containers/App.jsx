import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useGetAllData from '../hooks/useGetAllData';

const App = () => {
  const { data, loading, error } = useGetAllData();

  if (loading) return <p>Loading CV...</p>;

  if (error) return <p>An error has ocurred</p>;

  return (
    <>
      <Header avatar={data.avatar} name={data.name}>
        <About
          profession={data.profession}
          address={data.address}
          email={data.email}
          website={data.website}
          phone={data.phone}
        />
      </Header>
      <Profile profile={data.profile} />
      <Experience experiences={data.experience} />
      <div className="more-info">
        <Academic academics={data.academic} />
        <Skills skills={data.skills} />
        <Interest interests={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </>
  );
};

export default App;
