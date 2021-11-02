import ShopCard from "./ShopCard";
import { useState } from "react";
import ShopModal from "./ShopModal";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import { Form, Row, Stack } from "react-bootstrap";

function ShopList() {
  const [query, setQuery] = useState("");

  const shopList = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopCard key={shop._id} shop={shop} />);

  return (
    <div>
      <h1 className="title">Shops</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for shop by name"
          onChange={(event) => setQuery(event.target.value)}
        />
        <ShopModal />
      </Stack>

      <Row>{shopList}</Row>
    </div>
  );
}

export default observer(ShopList);
