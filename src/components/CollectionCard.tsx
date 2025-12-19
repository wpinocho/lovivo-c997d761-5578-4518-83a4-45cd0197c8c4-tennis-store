import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
          
          {collection.featured && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full font-semibold shadow-md backdrop-blur-sm">
              Destacado
            </span>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-xl mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Productos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}