def calculate_mathematical_expression(num,float_num,operator):
    if operator == '+':
        return num + float_num
    elif operator == '-':
        return float_num - num
    elif operator == '*':
        return num * float_num
    elif operator == ':' and float_num>0:
        return float(num / float_num)
    else:
        return None
#print(calculate_mathematical_expression( 10,2, 2 ))

def calculate_from_string():
    
    