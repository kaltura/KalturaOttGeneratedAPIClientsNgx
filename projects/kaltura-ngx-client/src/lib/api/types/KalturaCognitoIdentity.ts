
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDefault } from './KalturaDefault';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCognitoIdentityArgs  extends KalturaObjectBaseArgs {
    default? : KalturaDefault;
}


export class KalturaCognitoIdentity extends KalturaObjectBase {

    default : KalturaDefault;

    constructor(data? : KalturaCognitoIdentityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCognitoIdentity' },
				default : { type : 'o', subTypeConstructor : KalturaDefault, subType : 'KalturaDefault' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCognitoIdentity'] = KalturaCognitoIdentity;