export type Categories = {
  [name: string]: { path: string; subcategories: Categories };
};

export type File = {
    name: string;
    path: string;
}

export type Directory = {
    files: File[]
    directories: { [name: string]: Directory }
}

