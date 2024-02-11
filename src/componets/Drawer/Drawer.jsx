import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Transaction from "../Transaction/Transaction";
import statChartImg from "../../assets/stat-chart.png";

export default function TemporaryDrawer() {
  const [appTransactions, setTransactions] = useState([]);
  const currentId = useSelector((state) => state.users.currentId);
  useEffect(() => {
    let apiUrl = `https://test.gefara.xyz/api/v1/user/${currentId}/transactions`;
    axios.get(apiUrl).then((resp) => {
      setTransactions(resp.data);
    });
  }, [currentId]);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{
        fontSize: "11px",
        width: "470px",
        paddingTop: "56px",
        paddingLeft: "20px",
        paddingRight: "10px",
        color: "#ffffff",
        backgroundColor: "#121825",
      }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography style={{ paddingBottom: "18px" }}>
          testmail@gmail.com
        </Typography>
        <Typography style={{ paddingBottom: "20px" }}>
          Использование токенов
        </Typography>
        <img style={{ width: "400px", height: "200px" }} src={statChartImg} />
      </List>
      <Divider />
      <List style={{ marginTop: "41px" }}>
        <Typography style={{ paddingBottom: "20px" }}>
          История операций
        </Typography>
        <div style={{ textAlign: "center" }}>
          <table style={{ padding: "10px" }}>
            <thead>
              <tr>
                <th>Тип </th>
                <th>Сумма</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {appTransactions.map((transaction, index) => (
                <Transaction
                  transaction={transaction}
                  key={transaction.id}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </List>
    </Box>
  );

  return (
    <div className="drawer">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
