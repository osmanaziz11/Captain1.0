export const addMember = [
  {
    name: 'name',
    type: 'text',
    register: {
      minLength: {
        value: 4,
        message: 'Customer name must have at least 4 characters',
      },
      maxLength: {
        value: 30,
        message: 'Customer name can have at most 30 characters',
      },
      required: 'Customer name is required',
      pattern: {
        value: /^[A-Z a-z]+$/,
        message: 'Customer name must contain only alphabetic characters',
      },
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        viewBox="0 0 26 26"
      >
        <path
          fill="currentColor"
          d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z"
        />
      </svg>
    ),
    placeholder: 'Enter Customer name',
  },
  {
    name: 'phoneNumber',
    type: 'text',
    register: {
      required: 'Phone no is required',
      pattern: {
        value: /^((\+92|0))?[0-9]{10}$/,
        message: 'Please provide valid number',
      },
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899c.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535Z"
          />
        </g>
      </svg>
    ),
    placeholder: 'Enter phone number',
  },
  {
    type: 'text',
    name: 'cnic',
    register: {
      pattern: {
        value: /^(\d{5})-(\d{7})-(\d)$/,
        message: 'Please provide valid CNIC number',
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
    placeholder: 'CNIC ( Optional )',
  },
];
