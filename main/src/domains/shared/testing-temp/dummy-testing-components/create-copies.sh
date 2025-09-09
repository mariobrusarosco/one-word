#!/bin/bash

for i in {1..250}
do
   cp simple-component.tsx simple-component$i.tsx
   cp simple-component.spec.tsx simple-component$i.spec.tsx
done