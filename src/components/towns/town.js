import React, { Component } from "react";

import { Select } from "antd";
export const Fort = [
  { town: "Тетфорт", res: "Руда" },
  { town: "Мартлок", res: "Кожа" },
  { town: "Форт Стерлинг", res: "Дерево" },
  { town: "Бриджвотч", res: "Камень" },
  { town: "Люмхурст", res: "Хлопок" }
];

export default class Town extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Select
          defaultValue={undefined}
          onChange={e => {
            console.log(e.target.value);
          }}
        >
          <Select.Option value={undefined}>
            Выбор города
          </Select.Option>
          <Select.Option value={Fort[0].town}>{Fort[0].town}</Select.Option>
          <Select.Option value={Fort[1].town}>{Fort[1].town}</Select.Option>
          <Select.Option value={Fort[2].town}>{Fort[2].town}</Select.Option>
          <Select.Option value={Fort[3].town}>{Fort[3].town}</Select.Option>
          <Select.Option value={Fort[4].town}>{Fort[4].town}</Select.Option>
        </Select>
      </div>
    );
  }
}
