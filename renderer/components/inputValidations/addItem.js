export const addItem = [
  {
    name: 'name',
    type: 'text',
    register: {
      minLength: {
        value: 2,
        message: 'Item name must have at least 2 characters',
      },
      maxLength: {
        value: 15,
        message: 'Item name can have at most 15 characters',
      },
      required: 'Item name is required',
      pattern: {
        value: /^[A-Z a-z]+$/,
        message: 'Item name must contain only alphabetic characters',
      },
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    placeholder: 'Enter item name',
  },
  {
    name: 'purchasePrice',
    type: 'number',
    register: {
      required: 'Purchase price is required.',
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    placeholder: 'Enter purchase price',
  },
  {
    type: 'number',
    name: 'salePrice',
    register: {
      required: 'Sale price is required',
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    placeholder: 'Enter sale price',
  },
  {
    name: 'quantity',
    type: 'number',
    register: {
      required: 'Item quantity is required',
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    placeholder: 'Enter item quantity',
  },
];
