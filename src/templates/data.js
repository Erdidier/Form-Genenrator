let items = {
  fields: [
    {
      id: "1",
      name: "First Name",
      type: "text",
      hidden: false,
    },
    {
      id: "2",
      name: "Last Name",
      type: "text",
      hidden: false,
    },
    {
      id: "3",
      name: "status",
      type: "select",
      hidden: false,
      options: [
        {
          id: "1",
          name: "Active",
        },
        {
          id: "2",
          name: "Inactive",
        },
        {
          id: "3",
          name: "Pending",
        },
        {
          id: "4",
          name: "Deleted",
        },
      ],
    },
    {
      id: "4",
      name: "language",
      type: "radio",
      hidden: false,
      options: [
        {
          id: "1",
          name: "English",
        },
        {
          id: "2",
          name: "Spanish",
        },
        {
          id: "3",
          name: "French",
        },
      ],
    },
  ],
};

export default items;
