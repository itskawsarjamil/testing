const PrimaryButton = ({ action = "add" }: { action?: string }) => {
  return (
    <div>
      <button>click to {action}</button>
    </div>
  );
};

export default PrimaryButton;
