

export default function Transaction({ transaction }) {
  return (
    <>
      <tr  key={transaction.id}>
        <td>{transaction.type}</td>
        <td style={{ color: "#FE4242" }}>{transaction.amount} BTKN</td>
        <td>{transaction.created_at}</td>
      </tr>
    </>
  );
}
