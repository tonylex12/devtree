import colors from "colors";
import server from "./server";

const port = process.env.PORT || 4000;

server.listen(port, () => {
  // console.log(`Server is running on http://localhost:${port}`);
  console.log(
    colors.blue.bold(`Server is running on http://localhost:${port}`)
  );
});
