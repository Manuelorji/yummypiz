import styles from "./Tabs.module.scss";

const Tabs = ({ setTabIndex, tabIndex }) => {
  const tabs = [
    {
      id: 0,
      TabName: "All",
    },
    {
      id: 1,
      TabName: "Pizza",
    },
    {
      id: 2,
      TabName: "Other Snacks",
    },
  ];

  const handleTabsChange = (event) => {
    setTabIndex(Number(event.target.id));
  };

  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <div
          className={tabIndex === tab.id ? `${styles.active}` : ""}
          key={tab.id}
          id={tab.id}
          onClick={handleTabsChange}
        >
          {tab.TabName}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
