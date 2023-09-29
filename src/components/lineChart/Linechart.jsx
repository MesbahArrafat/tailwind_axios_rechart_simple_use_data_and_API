
import { LineChart, Line, XAxis,YAxis, Tooltip } from 'recharts';
const Linechart = ()=>{
    const studentData = [
        { id: 1, name: 'Alice', mathMarks: 85, physicsMarks: 90, chemistryMarks: 78 },
        { id: 2, name: 'Bob', mathMarks: 78, physicsMarks: 85, chemistryMarks: 92 },
        { id: 3, name: 'Charlie', mathMarks: 92, physicsMarks: 88, chemistryMarks: 75 },
        { id: 4, name: 'David', mathMarks: 63, physicsMarks: 70, chemistryMarks: 80 },
        { id: 5, name: 'Eve', mathMarks: 75, physicsMarks: 79, chemistryMarks: 88 },
        { id: 6, name: 'Frank', mathMarks: 88, physicsMarks: 91, chemistryMarks: 95 },
        { id: 7, name: 'Grace', mathMarks: 70, physicsMarks: 75, chemistryMarks: 63 },
        { id: 8, name: 'Hank', mathMarks: 95, physicsMarks: 89, chemistryMarks: 82 },
        { id: 9, name: 'Ivy', mathMarks: 82, physicsMarks: 76, chemistryMarks: 90 },
        { id: 10, name: 'Jack', mathMarks: 71, physicsMarks: 84, chemistryMarks: 77 },
      ];
      
      
    
  return(
   <div>
    <h1 className='text-4xl font-bold text-center mb-8'>Line cart student marks data show</h1>
    <LineChart width={400} height={400} data={studentData}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
       <Line type="monotone" dataKey="mathMarks" stroke="red" />
       <Line type="monotone" dataKey="physicsMarks" stroke="green" />
       <Line type="monotone" dataKey="chemistryMarks" stroke="blue" />
    </LineChart>
   </div>
  )
}
export default Linechart;