import { format } from 'date-fns'

export const formatDate = () => {
   format(new Date(), "eee d MMM" );
   ;
};
