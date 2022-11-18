def convolve(mat):
    
    s = []
    for i in range(len(mat)-2):
        #print(mat[i])
        #print(mat[i:3+i])
        l =[]
        for k in mat[i:3+i]:
            sum = 0
           # print(k)
            for n in k:
                sum+=n
         
            l.append(sum)
        
        s.append(l)
    print(s)
                 
                #print(sum) 


convolve(
    [[1, 1, 1, 1, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 1], [0.5, 0, 0, 1, 0]])        