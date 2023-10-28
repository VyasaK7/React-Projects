function Progress({ index, questionsNum, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={questionsNum} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{questionsNum}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
