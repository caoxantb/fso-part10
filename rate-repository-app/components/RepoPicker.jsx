import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";

const RepoPicker = ({
  orderBy,
  orderDirection,
  setOrderBy,
  setOrderDirection,
}) => {
  const [selectedOrder, setSelectedOrder] = useState("created_at");

  useEffect(() => {
    if (selectedOrder === "review_desc") {
      setOrderBy("RATING_AVERAGE");
      setOrderDirection("DESC");
    } else if (selectedOrder === "review_asc") {
      setOrderBy("RATING_AVERAGE");
      setOrderDirection("ASC");
    } else {
      setOrderBy("CREATED_AT");
      setOrderDirection("ASC");
    }
  }, [selectedOrder]);

  return (
    <Picker
      selectedValue={selectedOrder}
      onValueChange={(itemValue, itemIndex) => setSelectedOrder(itemValue)}
    >
      <Picker.Item label="Created At" value="created_at" />
      <Picker.Item label="Most favorable reviews" value="review_desc" />
      <Picker.Item label="Least favorable reviews" value="review_asc" />
    </Picker>
  );
};

export default RepoPicker;
