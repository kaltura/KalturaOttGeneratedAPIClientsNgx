
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSocialComment, KalturaSocialCommentArgs } from './KalturaSocialComment';

export interface KalturaSocialNetworkCommentArgs  extends KalturaSocialCommentArgs {
    likeCounter? : string;
	authorImageUrl? : string;
}


export class KalturaSocialNetworkComment extends KalturaSocialComment {

    likeCounter : string;
	authorImageUrl : string;

    constructor(data? : KalturaSocialNetworkCommentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialNetworkComment' },
				likeCounter : { type : 's' },
				authorImageUrl : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSocialNetworkComment'] = KalturaSocialNetworkComment;