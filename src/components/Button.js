import React, { forwardRef } from 'react';
import { cn } from '../lib/utils.js';

const Button = forwardRef(
    (
        {
            as: Component = 'button',
            className,
            variant = 'default',
            size = 'default',
            ...props
        },
        ref,
    ) => {
        return (
            <Component
                className={cn(
                    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    variant === 'default' &&
                        'bg-primary text-primary-foreground hover:bg-primary/90',
                    variant === 'destructive' &&
                        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                    variant === 'outline' &&
                        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                    variant === 'secondary' &&
                        'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                    variant === 'ghost' &&
                        'hover:bg-accent hover:text-accent-foreground',
                    variant === 'link' && 'text-primary underline-offset-4 hover:underline',
                    size === 'default' && 'px-4 py-2',
                    size === 'sm' && 'px-3 py-1.5',
                    size === 'lg' && 'px-6 py-3',
                    size === 'icon' && 'h-9 w-9 p-0',
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);

Button.displayName = 'Button';

export { Button };