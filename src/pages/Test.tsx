import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

export default function Test() {
  const handleChange = () => {
    console.log('change');
  };
  return (
    <div className="text-6xl text-red-500">
      Test
      <TextInput handelChange={handleChange} />
      <Button text="TEST" />
    </div>
  );
}
