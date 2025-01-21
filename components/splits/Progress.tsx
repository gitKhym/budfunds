import CircularProgress from "../global/CircularProgressBar";

const Progress = ({ participants, isSettled }: { participants: any, isSettled: boolean }) => {
  const settledCount = participants.reduce(
    (count: number, participant: { isSettled: boolean }) => count + (participant.isSettled ? 1 : 0),
    0
  );

  const percentage = Math.floor((settledCount * 100) / participants.length);
  const label = `${settledCount}/${participants.length}`;
  const progressCircleColor = `${isSettled ? '#63d685' : '#FF405D'}`;

  return (
    <CircularProgress
      label={label}
      progress={percentage}
      size={45}
      strokeWidth={3}
      outerCircleColor="#8B8B8B55"
      progressCircleColor={progressCircleColor}
      labelStyle={{ fontSize: 15 }}
    />
  );
};

export default Progress;
