import { useState } from "react";

interface SearchComponentProps {
  onCloseHandler: () => void;
  onSearchPressed: (city: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  onCloseHandler,
  onSearchPressed,
}) => {
  const [city, setCity] = useState("");

  const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",

          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <span
          onClick={onCloseHandler}
          style={{ padding: "5px", color: "white" }}
          className="material-icons"
        >
          {"close"}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search for places"
          style={{ padding: ".8rem" }}
          value={city}
          onChange={onInputChanged}
        />
        <button
          type="button"
          onClick={() => {
            onSearchPressed(city);
          }}
          style={{
            padding: ".8rem",
            color: "#fff",
            backgroundColor: "#3C47E9",
            border: "none",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
