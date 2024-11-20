import { Filestore } from "src/filestore/entities/filestore.entity";
// interface

export type Components = "carousel1";

interface Component<T, E extends Components> {
  name: E;
  data: T;
}

// Carousel 1
type Carousel1 = Array<Partial<Filestore>>;

export type HomeComponents = Array<Component<Carousel1, "carousel1">>;
