import fs from 'fs';
import path from 'path';

interface FileStorage {
  rooms : Room[];
}
export interface Room {
  name : string;
  members : User[];
}

export interface User {
  id : string;
  username : string;
}

const STORAGE_FILE_NAME = 'storage.json';
const APP_ROOT_PATH = process.cwd();
const FILE_PATH = path.join(APP_ROOT_PATH, STORAGE_FILE_NAME);

console.log({ 
  FILE_PATH,
  APP_ROOT_PATH,
  STORAGE_FILE_NAME
});

const getRoom = (name : string) : Room | undefined => fileStorage.rooms.find(room => room.name === name);
const getRooms = () : Room[] => fileStorage.rooms;
const addRoom = (name : string) => {
    if (getRoom(name)) {
      throw new Error('Room already exists');
    }

    fileStorage.rooms.push({ name, members : [] });
    syncStorage();
}
const addUserToRoom = (roomName : string, user : User) => {
    const room = getRoom(roomName);
    if (room) {
        room.members.push(user);
        syncStorage();
    }
}

const removeUserFromRoom = (roomName : string, userId : string) => {
    const room = getRoom(roomName);
    if (room) {
        room.members = room.members.filter(user => user.id !== userId);
        syncStorage();
    }
}

const fileStorage : FileStorage = fs.existsSync(FILE_PATH)
  ? JSON.parse(fs.readFileSync(FILE_PATH).toString())
  : { rooms : [] };

const syncStorage = () => fs.writeFileSync(FILE_PATH, JSON.stringify(fileStorage));

export const storage = {
  getRoom,
  getRooms,
  addRoom,
  addUserToRoom,
  removeUserFromRoom,
};
