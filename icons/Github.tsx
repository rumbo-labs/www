import React, { useState } from "react";
// #161614 height={28} width={48}
function Github() {
  const [hover, setHover] = useState<boolean>(false);
  return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <path
        fill={!hover ? "#161614" : "#49B1EB"}
        d="M10 0C4.478 0 0 4.585 0 10.24c0 4.524 2.865 8.363 6.839 9.717.5.095.683-.222.683-.493 0-.244-.01-1.05-.014-1.906-2.782.62-3.369-1.208-3.369-1.208-.455-1.184-1.11-1.499-1.11-1.499-.907-.635.068-.622.068-.622 1.005.072 1.533 1.055 1.533 1.055.892 1.565 2.34 1.113 2.91.851.09-.662.35-1.113.635-1.37-2.221-.258-4.556-1.136-4.556-5.06 0-1.118.39-2.031 1.03-2.748-.103-.258-.446-1.3.097-2.71 0 0 .84-.275 2.751 1.05A9.375 9.375 0 0110 4.951c.85.004 1.706.118 2.505.344 1.909-1.324 2.747-1.05 2.747-1.05.545 1.411.202 2.453.098 2.71.642.718 1.03 1.631 1.03 2.75 0 3.932-2.34 4.798-4.566 5.052.358.318.678.94.678 1.896 0 1.37-.012 2.473-.012 2.81 0 .273.18.592.687.492C17.138 18.6 20 14.763 20 10.24 20 4.585 15.523 0 10 0zM3.745 14.587c-.022.051-.1.066-.171.031-.073-.033-.113-.102-.09-.153.022-.053.1-.067.172-.032.073.033.115.103.09.154zm.492.45c-.047.045-.14.024-.204-.048-.065-.071-.078-.167-.03-.213.05-.045.14-.024.206.048.065.072.078.167.028.213zm.338.575c-.062.043-.162.002-.224-.089-.061-.09-.061-.2.002-.244.062-.043.16-.004.223.086.061.093.061.202-.001.247zm.57.666c-.054.062-.171.045-.257-.04-.087-.082-.111-.2-.056-.261.055-.062.173-.045.259.039.086.083.113.2.054.262zm.738.225c-.024.08-.137.116-.25.082-.113-.035-.187-.129-.164-.21.023-.08.136-.119.25-.082.113.035.188.128.164.21zm.84.095c.002.084-.094.154-.213.156-.12.003-.216-.066-.217-.149 0-.085.094-.154.213-.157.119-.002.216.066.216.15zm.824-.032c.014.082-.068.167-.186.19-.116.02-.224-.03-.239-.112-.014-.084.07-.169.186-.19.118-.022.224.028.239.111z"
      ></path>
    </svg>
  );
}

export default Github;