import nftImage from "../assets/images/image-equilibrium.jpg";
import eyeIcon from "../assets/images/icon-view.svg";
import ethIcon from "../assets/images/icon-ethereum.svg";
import clockIcon from "../assets/images/icon-clock.svg";
import personIcon from "../assets/images/image-avatar.png";

function NftCard() {
  return (
    <div className="bg-userCardBG flex flex-col p-6 rounded-2xl sm:max-w-sm sm:shadow-2xl">
      <div className="rounded-xl relative group basis-1/2">
        <img src={nftImage} alt="Nft" className="rounded-xl" />
        <button type="button" className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 h-full w-full rounded-xl bg-userTransparentCyan opacity-0 group-hover:opacity-100">
          <img src={eyeIcon} alt="Eye" className="text-userWhite" />
        </button>
      </div>
      <div className="basis-1/2">
        <div className="mt-6 pb-4 mb-4 flex flex-col gap-y-4 border-solid border-b border-userLineBlue">
          <button type="button" className="text-userWhite text-2xl font-bold hover:text-userCyan w-fit">
            Equilibrium #3429
          </button>
          <p className="text-userSoftBlue font-light sm:text-lg">Our equilibrium collection promotes balance and calm.</p>
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <img src={ethIcon} alt="Ethereum icon" className="object-scale-down" />
              <p className="text-userCyan">0.041 ETH</p>
            </div>
            <div className="flex gap-x-2">
              <img src={clockIcon} alt="Clock icon" className="object-scale-down" />
              <p className="text-userSoftBlue">3 days left</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <img src={personIcon} alt="Avatar" className="w-8 h-8 border border-solid border-userWhite rounded-full" />
          <button type="button" className="text-userSoftBlue font-light w-fit">
            Creation of <span className="text-userWhite hover:text-userCyan">Jules Wyvern</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NftCard