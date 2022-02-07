import './Featured.css';

type Props = {
    name: String;
    age: Number;
}

export const Featured = ({name,age}:Props) => {
    return (
        <>
            <h1>Olá {name}, você possui {age} anos, certo?</h1>
        </>
    );
}