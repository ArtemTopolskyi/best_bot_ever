import fs from 'fs';
import path from 'path';

export interface Storage {
  getRoom: (name: string) => Room | null;
  getRooms: () => Room[];
  addRoom: (name: string) => Room;
  addUserToRoom: (roomName: string, user: string) => void;
  removeUserFromRoom: (roomName: string, userId: string) => void;
}

interface FileStorage {
  rooms: Room[];
}
export interface Room {
  name: string;
  members: string[];
}

const STORAGE_FILE_NAME = 'storage.json';
const APP_ROOT_PATH = process.cwd();
const FILE_PATH = path.join(APP_ROOT_PATH, STORAGE_FILE_NAME);

const getRoom = (name: string): Room | null => (
  fileStorage.rooms.find(room => room.name === name) || null
);
const getRooms = (): Room[] => fileStorage.rooms;
const addRoom = (name: string) => {
    if (getRoom(name)) {
      throw new Error('Room already exists');
    }

    const room = { name, members: [] };

    fileStorage.rooms.push(room);

    syncStorage();

    return room;
}
const addUserToRoom = (roomName: string, username: string) => {
    const room = getRoom(roomName);
    if (room) {
        room.members.push(username);
        syncStorage();
    }
}

const removeUserFromRoom = (roomName: string, username: string) => {
    const room = getRoom(roomName);
    if (room) {
        room.members = room.members.filter(user => user !== username);
        syncStorage();
    }
}

const fileStorage: FileStorage = fs.existsSync(FILE_PATH)
  ? JSON.parse(fs.readFileSync(FILE_PATH).toString())
 : { rooms: [] };

const syncStorage = () => fs.writeFileSync(FILE_PATH, JSON.stringify(fileStorage));

const storage = {
  getRoom,
  getRooms,
  addRoom,
  addUserToRoom,
  removeUserFromRoom,
};

export const getStorage = (): Storage => storage;
