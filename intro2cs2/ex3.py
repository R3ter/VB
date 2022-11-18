def input_list():
    y = []
    sum = 0
    while True:
        x = input()
        if x != '':
            y.append(float(x))
            sum = sum + float(x)
        else:
            y.append(sum)
            break
    return y
        


def inner_product(vec_1,vec_2):
    sum = 0
    if len(vec_1) != len(vec_2):
        return None
    for i in range(len(vec_1)):

        x = vec_1[i]*vec_2[i] 
        sum =  x + sum
        
    return sum    


def sequence_monotonicity(sequence):
    x1 = True
    x2 = True
    x3 = True
    x4 = True
    for i in range(len(sequence)-1):
        if sequence[i] < sequence[i+1]:
            x3 = False
            x4 = False
        elif sequence[i] > sequence[i+1]:
            x1 = False
            x2 = False
        else:
            x2 = False
            x4 = False
    return [x1, x2, x3, x4]



def monotonicity_inverse(def_bool):
    count=int(def_bool[0])+int(def_bool[1])+int(def_bool[2])+int(def_bool[3])
    if count >= 3:
        return None
    elif ((def_bool[0] and def_bool[3]) or
    (def_bool[1] and def_bool[3])or
    (def_bool[1] and def_bool[2])or
    (def_bool[1] and not def_bool[0])or
    (def_bool[3] and not def_bool[2])):
        return None  
    elif count == 0:
        return [-3,3,0,0]
    elif def_bool[0] and def_bool[2]:
        return [1,1,1,1]
    elif def_bool[0]:
        return [1,2,3,4]
    elif def_bool[2]:
        return [4,3,2,1]
        
                   
         



def convolve(mat):
    res1=[]
    for i in range(len(mat)-2):
        res=[]
        for j in range(len(mat[0])-2):
            l=mat[i:i+3]
            Sum=0
            for k in l:
                for s in k[j:j+3]:
                    Sum+=float(s)
            res.append(Sum)
        res1.append(res)
    return(res1)

                


        
def sum_of_vectors(vec_lst):
    if len(vec_lst) == 0:
        return None
    
   
    
    lst = []
    k=0
    y = len(vec_lst[0])
    while k<y:
        Sum = 0
       
        for i in range(len(vec_lst)):
            x = vec_lst[i][k]
            print(x)
            
            Sum += x
            
                
            
        k+=1    
        lst.append(Sum)       
            
    return lst   
            
               
             
             
            
           


def num_of_orthogonal(vectors):
    k = 0
    
    count = 0
    while k<len(vectors):
        x = 1
        
        for l in range(k+1,len(vectors)):
            
            y = inner_product(vectors[k],vectors[l])
            
            x += 1
            if y == 0:
                count+=1
        k+=1    
    return count

   


