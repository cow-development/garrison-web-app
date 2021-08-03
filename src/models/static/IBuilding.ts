import {
  IInstantiable,
  IStaticEntity,
  IStaticEntityCost
} from "./IStaticEntity";

/**
 * The representation of a building.
 */
export interface IBuilding extends IStaticEntity {
  /** Instantiation requirements and characteristics. */
  instantiation: {
    cost: IBuildingCost;
    minWorkforce: number;
    duration: number;
    requiredEntities ? : {
      buildings: IRequiredBuilding[];
    }
  };

  /** Upgrades list. */
  upgrades ? : {
    level: number;
    word: string | {
      side: string;
      jargon: string;
    } [];
    requiredEntities ? : {
      buildings: IRequiredBuilding[];
    }
  } [];

  /** Extension characteristics. */
  extension ? : {
    /** Requirements. */
    requiredEntities ? : {
      buildings: IRequiredBuildingForExtensionLevel[];
    }

    /** Maximum extension level. */
    maxLevel: number;
  };

  /** A harvest building is either a place where peasants
   * can be assigned to harvest some gold or wood, or a place
   * that directly gives access to gifted resources such as food. */
  harvest?: {
    /** Which resource is this building harvesting (gold, wood, food) ? */
    resource: 'gold' | 'wood' | 'plot' | 'food';

    /**
     * Either the amount of resource this building is giving when it gets constructed,
     * or the amount of resource this building is giving every *t* time for 1 worker
     * (it depends whether maxWorkforce property is included or not).
     */
    amount: number;

    /** Maximum workforce on harvesting in this building. */
    maxWorkforce?: number;
  }
  // ... implement other types: production, research, military

  /**
   * Some buildings allow certain types of units to be trained (see units required entites).
   * If so, they only allow a certain quantity of units to be trained.
   */
  trainLimits ? : {
    unitType: string;
    quantity: number;
  } [];
}

export type BuildingImprovementType = 'upgrade' | 'extension';

/** A building that can be required to build, extend or upgrade another building, or train a unit. */
export interface IRequiredBuilding {
  /** The unique identifier of the required building. */
  code: string;

  /** The required upgrade level of the required building. */
  upgradeLevel ? : number;
}

/** 
 * The extension level at which it is required to build the much-vauted required buildings.
 * */
export interface IRequiredBuildingForExtensionLevel extends IRequiredBuilding {
  /** The extension level at which the building(s) is/are required. */
  level: number;
}

/**
 * The cost of instantiating, upgrading or extending a building.
 */
export interface IBuildingCost extends IStaticEntityCost {
  /** Cost in plot. */
  plot: number;
}

/**
 * An instantiable building.
 */
 export interface IInstantiableBuilding extends IInstantiable {
  /** Instantiation requirements and characteristics. */
  instantiation: {
    cost: IBuildingCost;
    duration: number;
    minWorkforce: number;
    requiredEntities: {
      buildings: IRequiredBuilding[];
    };
  }
}