import Activity from './Activity.jsx';

const Exercises = () =>{

  const disorders =  [
    "Depression",
    "Anxiety",
    "Schizophrenia",
    "Panic Disorder",
    "Obsessive-Compulsive Disorder (OCD)",
    "Autism Spectrum Disorder (ASD)"
  ];
  
  return (
    <div className='m-4'>
      {disorders.map((disorder,index) => (
        <div className='p-2' key={disorder}>
          <h1 className='font-semibold text-lg'>{disorder}</h1>
          <Activity key={index+disorder} disorderProp = {disorder} />
        </div>
      ))}
    </div>
  )
}

export default Exercises;