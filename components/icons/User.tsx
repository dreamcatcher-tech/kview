export default function IconUser({ size = 6 }: { size?: number }) {
  return (
    <svg
      class={`w-${size} h-${size}`}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="m256 16c-63.652 0-124.7 25.285-169.71 70.293-45.008 45.012-70.293 106.05-70.293 169.71s25.285 124.7 70.293 169.71c45.012 45.008 106.05 70.293 169.71 70.293s124.7-25.285 169.71-70.293c45.008-45.012 70.293-106.05 70.293-169.71 0-42.129-11.09-83.516-32.152-120-21.066-36.484-51.363-66.781-87.848-87.848-36.484-21.062-77.871-32.152-120-32.152zm0 32c50.809 0.058594 99.836 18.711 137.83 52.441 38 33.727 62.336 80.191 68.426 130.63 6.0898 50.441-6.4961 101.37-35.379 143.16-5.6289-23.449-16.02-45.488-30.527-64.758-14.504-19.266-32.812-35.344-53.793-47.242 18.047-21.977 27.059-50 25.203-78.379s-14.438-54.988-35.191-74.43c-20.758-19.445-48.133-30.262-76.57-30.262s-55.812 10.816-76.57 30.262c-20.754 19.441-33.336 46.051-35.191 74.43s7.1562 56.402 25.203 78.379c-20.98 11.898-39.289 27.977-53.793 47.242-14.508 19.27-24.898 41.309-30.527 64.758-28.883-41.797-41.469-92.723-35.379-143.16 6.0898-50.441 30.426-96.906 68.426-130.63 37.996-33.73 87.023-52.383 137.83-52.441zm-80 144c0-21.219 8.4297-41.566 23.43-56.57 15.004-15 35.352-23.43 56.57-23.43s41.566 8.4297 56.57 23.43c15 15.004 23.43 35.352 23.43 56.57s-8.4297 41.566-23.43 56.57c-15.004 15-35.352 23.43-56.57 23.43s-41.566-8.4297-56.57-23.43c-15-15.004-23.43-35.352-23.43-56.57zm-63.199 214.4c1.7539-25.602 10.316-50.27 24.805-71.453 14.484-21.18 34.371-38.105 57.594-49.023 18.117 11.707 39.23 17.938 60.801 17.938s42.684-6.2305 60.801-17.938c23.375 10.805 43.422 27.684 58.055 48.875 14.633 21.191 23.316 45.918 25.145 71.602-38.52 36.945-89.828 57.574-143.2 57.574-53.375 0-104.68-20.629-143.2-57.574z" />
    </svg>
  );
}
