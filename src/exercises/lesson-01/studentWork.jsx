//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Semhar';
  const age = 30;
  const hobbies = [
    { id: 1, hobbyName: 'Reading' },
    { id: 2, hobbyName: 'Cooking' },
    { id: 3, hobbyName: 'Outdoor Activities' },
    { id: 4, hobbyName: 'documentaries' },
  ];
  return (
    <div>
      <h1>A Little Bit About Me</h1>
      <p>
        {' '}
        Hi there, I&apos;m {name}! I am {age} years young 😄 and always chasing
        a new hobby. Here is what is currently keeping me entertained:
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.hobbyName}</li>
        ))}
      </ul>
    </div>
  );
}
