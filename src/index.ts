import * as CryptoJS from "crypto-js";

class Block {
	//생성하지 않아도 사용 가능한 메서드 static
	static calculateBlockHash = (
		index: number,
		previousHash: string,
		timeStamp: number,
		data: string
	): string =>
		CryptoJS.SHA256(index + previousHash + timeStamp + data).toString();

	static validateStructure = (Block: Block): boolean =>
		typeof Block.index === "number" &&
		typeof Block.hash === "string" &&
		typeof Block.previousHash === "string" &&
		typeof Block.timeStamp === "number" &&
		typeof Block.data === "string";

	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timeStamp: number;

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		data: string,
		timeStamp: number
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timeStamp = timeStamp;
	}
}
//static 덕분에 calculateBlockHash 가능

const genesisBlock: Block = new Block(0, "202002", "", "helo", 123456);

let blockChain: Block[] = [genesisBlock];

const getBLockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const getHashForBlock = (aBlock: Block): string =>
	Block.calculateBlockHash(
		aBlock.index,
		aBlock.previousHash,
		aBlock.timeStamp,
		aBlock.data
	);

const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock();
	const newIndex: number = previousBlock.index + 1;
	const newTimeStamp: number = getNewTimeStamp();
	const newHash: string = Block.calculateBlockHash(
		newIndex,
		previousBlock.hash,
		newTimeStamp,
		data
	);
	const newBlock: Block = new Block(
		newIndex,
		newHash,
		previousBlock.hash,
		data,
		newTimeStamp
	);
	addBlock(newBlock);
	return newBlock;
};

const isBlockVaild = (candidateBlock: Block, previousBlock: Block): boolean => {
	if (!Block.validateStructure(candidateBlock)) {
		return false;
	} else if (previousBlock.index + 1 !== candidateBlock.index) {
		return false;
	} else if (previousBlock.hash !== candidateBlock.previousHash) {
		return false;
	} else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
		return false;
	} else {
		return true;
	}
};

const addBlock = (candidateBlock: Block): void => {
	if (isBlockVaild(candidateBlock, getLatestBlock())) {
		blockChain.push(candidateBlock);
	}
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockChain);

export {};
